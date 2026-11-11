import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { error: 'The CV PDF has not been uploaded yet.' },
    { status: 404 },
  )
}
