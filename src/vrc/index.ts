import { ScoreAllianceMeta, AllowablePointFormats } from "..";
import { QualificationResults as vrc_tipping_point_qual_results } from "../vrc_tipping_point";

export interface MatchParticpants {
    redAlliance: ScoreAllianceMeta;
    blueAlliance: ScoreAllianceMeta;
}

export interface PointRaw {
    redAlliance: AllowablePointFormats;
    blueAlliance: AllowablePointFormats;
}

export type TeamQualificationResults = vrc_tipping_point_qual_results;

export interface AllianceQualificationResults {
    team1: TeamQualificationResults
    team2: TeamQualificationResults
}

export interface MatchQualificationResults {
    redAlliance: AllianceQualificationResults
    blueAlliance: AllianceQualificationResults
}