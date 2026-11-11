'use client'

import { useId, useState, type ReactNode } from 'react'
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

export function ContactChatDialog({ children }: { children: ReactNode }) {
  const messageId = useId()
  const [draft, setDraft] = useState('')
  const [status, setStatus] = useState('')
  const trimmedDraft = draft.trim()
  const emailHref = trimmedDraft
    ? `mailto:megagradus@gmail.com?subject=${encodeURIComponent('Portfolio inquiry for Grace Mukantwali')}&body=${encodeURIComponent(trimmedDraft)}`
    : undefined

  function handleEmailClick() {
    setStatus('Your message remains in this box. Complete delivery in your email app.')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-[min(36rem,calc(100svh-2rem))] max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-md flex-col gap-0 overflow-hidden p-0 sm:max-w-md">
        <DialogHeader className="border-b border-border p-5 pr-12 text-left">
          <DialogTitle className="text-xl">Message Grace</DialogTitle>
          <DialogDescription>
            Open an email draft addressed to Grace, then send it from your email app so she can reply to you.
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
                  <MessageScrollerPrimitive.Item scrollAnchor>
                    <Message align="start" role="listitem">
                      <MessageAvatar
                        aria-hidden="true"
                        className="size-8 text-xs font-semibold text-accent"
                      >
                        GM
                      </MessageAvatar>
                      <MessageContent className="max-w-[85%]">
                        <MessageHeader>Grace</MessageHeader>
                        <Bubble align="start" variant="secondary">
                          <BubbleContent>
                            Hi, I&apos;m Grace. Tell me a little about what you&apos;re working on, and I&apos;ll get back to you by email.
                          </BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerPrimitive.Item>
                </MessageGroup>
              </MessageScrollerPrimitive.Content>
            </MessageScrollerPrimitive.Viewport>
          </MessageScrollerPrimitive.Root>
        </MessageScrollerPrimitive.Provider>

        <div className="border-t border-border p-4">
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
                    Email draft
                  </span>
                  {emailHref ? (
                    <InputGroupButton size="sm" variant="default" asChild>
                      <a href={emailHref} onClick={handleEmailClick}>
                        Open email
                        <Send data-icon="inline-end" />
                      </a>
                    </InputGroupButton>
                  ) : (
                    <InputGroupButton
                      type="button"
                      size="sm"
                      variant="default"
                      disabled
                    >
                      Open email
                      <Send data-icon="inline-end" />
                    </InputGroupButton>
                  )}
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription id={`${messageId}-help`}>
                Your message stays here. Open the email draft and press Send to deliver it.
              </FieldDescription>
              <FieldDescription id={`${messageId}-status`} role="status" aria-live="polite">
                {status}
              </FieldDescription>
            </Field>
          </FieldGroup>
        </div>
      </DialogContent>
    </Dialog>
  )
}
