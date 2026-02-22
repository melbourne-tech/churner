import { NextResponse } from 'next/server'
import { start } from 'workflow/api'
import { updateCardsWorkflow } from '~/workflows/update-cards'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const run = await start(updateCardsWorkflow, [])

  return NextResponse.json({ runId: run.runId })
}
