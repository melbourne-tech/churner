import { NextResponse } from 'next/server'
import { start } from 'workflow/api'
import { updateCardsWorkflow } from '~/workflows/update-cards'

export async function GET(request: Request) {
  const run = await start(updateCardsWorkflow, [])

  return NextResponse.json({ runId: run.runId })
}
