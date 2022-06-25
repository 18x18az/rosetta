export enum DISPLAY_STATE {
    UPCOMING = "UPCOMING",
    ALLIANCE = "ALLIANCE",
    SCORE = "SCORE",
    AWARD = "AWARD"
}

export enum PROGRAM {
    VRC = "VRC",
    VEXU = "VEXU"
}

export enum AGE_GROUP {
    MIDDLE_SCHOOL = "MS",
    HIGH_SCHOOL = "HS",
    COLLEGE = "VU"
}

type Id = string;

export type TeamId = Id;
export type FieldId = Id;
export type MatchId = Id;
export type SkillsRunId = Id

export interface ITeam {
    id?: TeamId;
    number: string;
    name: string;
    location: string;
    school: string;
    age: AGE_GROUP;
}

export interface ITeams {
    [key: TeamId]: ITeam
}

export enum MESSAGE_TYPE {
    POST = "POST",
    GET = "GET"
}

export type IPath = Array<string>

export interface IMessage {
    type: MESSAGE_TYPE
    path: IPath
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    payload?: any
}

export interface IFieldInfo {
    field: FieldId
    name: string
}

export enum MATCH_TYPE {
    QUAL = "QUAL",
    R16 = "R16",
    QF = "QF",
    SF = "SF",
    F = "F"
}

export interface IVrcAllianceTeams {
    team1: TeamId
    team2: TeamId
}

export interface IMatchTeams {
    red: IVrcAllianceTeams | TeamId
    blue: IVrcAllianceTeams | TeamId
}
export interface IMatchInfo {
    matchId: MatchId
    type: MATCH_TYPE
    number: number
    subNumber?: number
    teams: IMatchTeams
}

export interface IMatchList {
    [key: MatchId]: IMatchInfo
}

export interface IAllianceSelectionStatus{
    picking: TeamId | null
    selected: TeamId | null
    eligible: Array<TeamId> // can be picked by an alliance captain
    remaining: Array<TeamId> // can not be picked, but can still be alliance captain
    alliances: Array<IVrcAllianceTeams>
}

export interface ICycleTimeInfo {
    rollingAvg: number,
    recentCycleTimes: number[],
    recentMatches: string[]
}

export interface IAward {
    name: string
    winner: TeamId | IVrcAllianceTeams | null
}

export type IAwards = Array<IAward>;

export interface ISkillsScoring {
    run: SkillsRunId
    raw: IRawScoring
    stopTime: number
}
export interface IMatchScoring {
    match: MatchId
    red: IAllianceScoring
    blue: IAllianceScoring

}
export interface IAllianceScoring {
    raw: IRawScoring
    wonAuto: boolean
    gotAwp?: boolean
    team1Dq: boolean
    team2Dq?: boolean
}
export interface IRawScoring {
    highGoalDiscs: number
    lowGoalDiscs: number
    ownedRollers: number
    coveredTiles: number
}
