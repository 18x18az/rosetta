export enum DISPLAY_STATE {
    UPCOMING = "UPCOMING",
    SCORE = "SCORE",
    OTHER = "OTHER",
    NONE = "NONE"
}

export enum COMPETITION_STAGE {
    IDLE = "IDLE",
    INSPECTION = "INSPECTION",
    QUALS = "QUALS",
    ALLIANCE = "ALLIANCE",
    ELIMS = "ELIMS",
    AWARDS = "AWARDS"
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
    age?: AGE_GROUP;
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

export enum FIELD_CONTROL {
    AUTONOMOUS = "AUTO",
    DRIVER = "DRIVER",
    PAUSED = "PAUSED",
    DISABLED = "DISABLED",
    TIMEOUT = "TO"
}

export interface IFieldState {
    field: FieldId
    control: FIELD_CONTROL
    timeRemaining: number
    match: string
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

export interface IAllianceTeams {
    team1: TeamId
    team2: TeamId
}

export interface IMatchInfo {
    matchId: MatchId
    type: MATCH_TYPE
    number: number
    subNumber?: number
    red: IAllianceTeams | TeamId
    blue: IAllianceTeams | TeamId
}

export interface ISimpleAllianceResults {
    team1: TeamId;
    team2: TeamId;
    score: number;
}
export interface ISimpleMatchResult {
    name: string;
    red: ISimpleAllianceResults;
    blue: ISimpleAllianceResults;
}

export interface IMatchList {
    [key: MatchId]: IMatchInfo
}

export interface IAllianceSelectionStatus {
    picking: TeamId | null
    selected: TeamId | null
    eligible: Array<TeamId> // can be picked by an alliance captain
    remaining: Array<TeamId> // can not be picked, but can still be alliance captain
    alliances: Array<IAllianceTeams>
}

export interface ICycleTimeInfo {
    rollingAvg: number,
    recentCycleTimes: number[],
    recentMatches: string[]
}

export interface IAward {
    name: string
    winner: TeamId | IAllianceTeams | null
}

export type IAwards = Array<IAward>;

export interface IOBSConfig {
    setManual: boolean,
    isConnected: boolean,
    attemptReconnect: boolean
}

export interface IInspectionStatus {
    noShow: TeamId[];
    notCheckedIn: TeamId[];
    notStarted: TeamId[];
    partial: TeamId[];
    inspected: TeamId[];
}

export interface IRankingData {
    rank: number,
    team: TeamId,
    avgWP: number,
    avgAP: number,
    avgSP: number,
    record: string
}

export type IRankings = Array<IRankingData>

export interface ISkillsRankingData {
    rank: number,
    team: TeamId,
    total: number,
    highProgramming: number,
    numProgramming: number,
    highDriver: number,
    numDriver: number
}

export type ISkillsRankings = Array<ISkillsRankingData>