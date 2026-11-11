'use client'

import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { Send } from 'lucide-react'
import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from '@/components/ui/message'

type ChatMessage = {
  id: string
  sender: 'grace' | 'visitor'
  text: string
}

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    sender: 'grace',
    text: "Hi, I'm Grace. Tell me a little about what you're working on, and I'll get back to you by email.",
  },
]

export function ContactChatDialog({ children }: { children: ReactNode }) {
  const messageId = useId()
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState(initialMessages)
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = draft.trim()
    if (!message) return

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), sender: 'visitor', text: message },
    ])
    setDraft('')
    setStatus('Your email app will open with this message ready to send.')

    const subject = encodeURIComponent('Portfolio inquiry for Grace Mukantwali')
    const body = encodeURIComponent(message)
    window.location.href = `mailto:megagradus@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-[min(36rem,calc(100svh-2rem))] max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-md flex-col gap-0 overflow-hidden p-0 sm:max-w-md">
        <DialogHeader className="border-b border-border p-5 pr-12 text-left">
          <DialogTitle className="text-xl">Message Grace</DialogTitle>
          <DialogDescription>
            Send a note and I&apos;ll reply directly by email.
          </DialogDescription>
        </DialogHeader>

        <MessageScrollerPrimitive.Provider>
          <MessageScrollerPrimitive.Root className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
            <MessageScrollerPrimitive.Viewport className="h-full min-h-0 overflow-y-auto overscroll-contain">
              <MessageScrollerPrimitive.Content className="flex h-max min-h-full flex-col gap-4 px-5 py-5">
                <MessageGroup
                  role="log"
                  aria-label="Conversation with Grace Mukantwali"
                  aria-live="polite"
                  className="gap-4"
                >
                  {messages.map((item, index) => {
                    const isGrace = item.sender === 'grace'

                    return (
                      <MessageScrollerPrimitive.Item
                        key={item.id}
                        scrollAnchor={index === messages.length - 1}
                      >
                        <Message
                          align={isGrace ? 'start' : 'end'}
                          role="listitem"
                        >
                          {isGrace && (
                            <MessageAvatar
                              aria-hidden="true"
                              className="size-8 text-xs font-semibold text-accent"
                            >
                              GM
                            </MessageAvatar>
                          )}
                          <MessageContent className="max-w-[85%]">
                            <MessageHeader>{isGrace ? 'Grace' : 'You'}</MessageHeader>
                            <Bubble
                              align={isGrace ? 'start' : 'end'}
                              variant={isGrace ? 'secondary' : 'tinted'}
                            >
                              <BubbleContent>{item.text}</BubbleContent>
                            </Bubble>
                          </MessageContent>
                        </Message>
                      </MessageScrollerPrimitive.Item>
                    )
                  })}
                </MessageGroup>
              </MessageScrollerPrimitive.Content>
            </MessageScrollerPrimitive.Viewport>
          </MessageScrollerPrimitive.Root>
        </MessageScrollerPrimitive.Provider>

        <form onSubmit={handleSubmit} className="border-t border-border p-4">
          <FieldGroup className="gap-2">
            <Field>
              <FieldLabel htmlFor={messageId} className="sr-only">
                Your message
              </FieldLabel>
              <InputGroup className="h-auto flex-col items-stretch">
                <InputGroupTextarea
                  id={messageId}
                  rows={2}
                  maxLength={1200}
                  placeholder="Write your message..."
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  aria-describedby={`${messageId}-help ${messageId}-status`}
                />
                <InputGroupAddon
                  align="block-end"
                  className="justify-between border-t border-border px-3 py-2"
                >
                  <span className="text-xs text-muted-foreground">
                    Opens your email app
                  </span>
                  <InputGroupButton
                    type="submit"
                    size="sm"
                    variant="default"
                    disabled={!draft.trim()}
                  >
                    Send
                    <Send data-icon="inline-end" />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription id={`${messageId}-help`}>
                Messages aren&apos;t sent or stored on this site until you send the email.
              </FieldDescription>
              <FieldDescription id={`${messageId}-status`} role="status" aria-live="polite">
                {status}
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  )
}
