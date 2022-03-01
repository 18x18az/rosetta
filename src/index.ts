import { IRawResults as IVrcTippingPointRaw } from "./vrc_tipping_point";
import {
	IMatchParticipants as VrcMatchParticipants,
	IPointRaw as VrcPointRaw,
	IMatchQualificationResults as VrcQualificationResults
} from "./vrc";

export type AllowablePointFormats = IVrcTippingPointRaw;

export enum DISPLAY_STATE {
    UPCOMING = "UPCOMING",
    ALLIANCE = "ALLIANCE",
    SCORE = "SCORE",
    AWARD = "AWARD"
}

export enum GAME {
    VRC_TIPPING_POINT = "VRC_TIPPING_POINT"
}

export enum PROGRAM {
    VRC = "VRC"
}

export interface ICompetitionMeta {
    game: GAME;
    program: PROGRAM;
}

export enum AGE_GROUP {
    MIDDLE_SCHOOL = "MS",
    HIGH_SCHOOL = "HS"
}

export type TeamId = string;
export type FieldId = string;
export type MatchId = string;

export interface ITeam {
    id?: TeamId;
    number: string;
    name: string;
    location: string;
    school: string;
}

export interface ITeams {
    [key: TeamId]: ITeam
}

export interface IScoreTeamMeta {
    teamId: TeamId;
    disqualified: boolean;
    noShow: boolean;
}

export interface IScoreAllianceMeta {
    team1: IScoreTeamMeta;
    team2: IScoreTeamMeta;
}

export type ParticipantInfo = VrcMatchParticipants;

export type PointRaw = VrcPointRaw;

export interface IFullRawMatch {
    participants: ParticipantInfo;
    rawResults: PointRaw
}

export type QualificationResults = VrcQualificationResults;

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
    red: IAllianceTeams
    blue: IAllianceTeams
}

export interface IMatchList {
    [key: MatchId]: IMatchInfo
}

export interface IAllianceSelectionStatus{
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
    winner: TeamId | null
}

export type IAwards = Array<IAward>;