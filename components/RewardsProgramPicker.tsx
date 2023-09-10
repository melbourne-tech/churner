import { RewardsProgram } from '~/gql/graphql'
import { Label } from './ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select'

export interface RewardsProgramPickerProps {
  rewardsProgram: RewardsProgram
  setRewardsProgram: (rewardsProgram: RewardsProgram) => void
}

const RewardsProgramPicker = ({
  rewardsProgram,
  setRewardsProgram,
}: RewardsProgramPickerProps) => {
  return (
    <div>
      <Label htmlFor="rewards-program" className="mb-2">
        Rewards Program
      </Label>
      <Select
        value={rewardsProgram}
        onValueChange={(value) => setRewardsProgram(value as RewardsProgram)}
      >
        <SelectTrigger id="rewards-program" className="w-full">
          <SelectValue placeholder="Rewards Program" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={RewardsProgram.Qantas}>Qantas</SelectItem>
          <SelectItem value={RewardsProgram.Velocity}>Velocity</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default RewardsProgramPicker
