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

export enum EventStage {
  LOADING = 'LOADING', // State unknown
  SETUP = 'SETUP', // Middleman not fully setup
  EVENT = 'EVENT', // All required info pulled from TM
  TEARDOWN = 'TEARDOWN' // Event is over, look for a change in event name to go back to setup
}

export enum ConnectionState {
  CONNECTING = 'CONNECTING',
  DOWN = 'DOWN',
  AUTH = 'AUTH',
  CODE = 'CODE',
  CONNECTED = 'CONNECTED'
}
