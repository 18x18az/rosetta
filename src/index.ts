export interface Alliance {
  team1: number
  team2?: number
}

export interface ScheduledQualificationMatch {
  matchNumber: number
  redAlliance: Alliance
  blueAlliance: Alliance
}

export interface RawScheduleBlock {
  start: Date
  end: Date
  numMatches: number
}

export interface RawMatchBlock {
  start: Date
  end: Date
  matches: ScheduledQualificationMatch[]
}

export interface RawTeam {
  number: string
  name: string
  location: string
  school: string
}
