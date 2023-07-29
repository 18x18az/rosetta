export interface Team {
  number: string
  name: string
  city: string
  state: string
  country: string
  ageGroup: string
}

export interface TeamInfo {
  [key: string]: Team
}

export enum EVENT_STAGE {
  SETUP = 'setup',
  CHECKIN = 'checkin',
  EVENT = 'event',
  TEARDOWN = 'teardown'
}

export enum INSPECTION_STAGE {
  NO_SHOW = 'noShow',
  NOT_HERE = 'notHere',
  CHECKED_IN = 'checkedIn',
  PARTIAL = 'partial',
  COMPLETE = 'complete'
}

export interface InspectionCriteriaSummary {
  text: string
  met: boolean
  uuid: number
}

export interface InspectionSectionSummary {
  text: string
  criteria: InspectionCriteriaSummary[]
}

export type InspectionSummary = InspectionSectionSummary[]
