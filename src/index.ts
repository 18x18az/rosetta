import { raw_results as vrc_tipping_point_raw } from "./vrc_tipping_point";
import {
    MatchParticpants as VrcMatchParticipants,
    PointRaw as VrcPointRaw,
    MatchQualificationResults as VrcQualificationResults
} from "./vrc";

export type AllowablePointFormats = vrc_tipping_point_raw;

export enum Game {
    VRC_TIPPING_POINT
}

export enum Program {
    VRC
}

export interface CompetitionMeta {
    game: Game;
    program: Program;
}

export enum AgeGroup {
    MIDDLE_SCHOOL,
    HIGH_SCHOOL
}

export type TeamId = string;
export type FieldId = string;

export interface Team {
    id?: TeamId;
    number: string;
    name: string;
    location: string;
    school: string;
}

export interface Teams {
    [key: TeamId]: Team
}

export interface ScoreTeamMeta {
    teamId: TeamId;
    disqualified: boolean;
    noShow: boolean;
}

export interface ScoreAllianceMeta {
    team1: ScoreTeamMeta;
    team2: ScoreTeamMeta;
}

export type ParticipantInfo = VrcMatchParticipants;

export type PointRaw = VrcPointRaw;

export interface FullRawMatch {
    participants: ParticipantInfo;
    rawResults: PointRaw
}

export type QualificationResults = VrcQualificationResults;

export interface SimpleAllianceResults {
    team1: TeamId;
    team2: TeamId;
    score: number;
}

export interface SimpleMatchResult {
    name: string;
    red: SimpleAllianceResults;
    blue: SimpleAllianceResults;
}

export enum MESSAGE_TYPE {
    POST = "POST",
    GET = "GET"
}

export type IPath = Array<string>

export interface IMessage {
    type: MESSAGE_TYPE
    path: IPath
    payload?: any
}

export enum FieldControl {
    AUTONOMOUS,
    DRIVER,
    PAUSED,
    DISABLED
}
export interface IFieldState {
    field: FieldId
    control: FieldControl
    timeRemaining: number
    match: string
}

export enum MatchType {
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
    matchId: string
    type: MatchType
    number: number
    subNumber?: number
    red: IAllianceTeams
    blue: IAllianceTeams
}
