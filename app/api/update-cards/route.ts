import { NextResponse } from 'next/server'
import { start } from 'workflow/api'
import { updateCardWorkflow } from '~/workflows/update-card'

export async function GET(request: Request) {
  const run = await start(updateCardWorkflow, [
    {
      id: '1',
      name: 'Ultimate Awards Credit Card',
      url: 'https://www.commbank.com.au/credit-cards/ultimate.html',
      rewardsProgram: 'QANTAS',
    },
  ])

  return NextResponse.json({ runId: run.runId })
}
