// @flow

import React from 'react';

import CueCard from './components/Intertitle';
import type {CueCardType} from './components/Intertitle';

import Code from './components/Listing';
import type {CodeType} from './components/Listing';

import Note from './components/Note';
import type {NoteType} from './components/Note';

export type SegmentType = CodeType | CueCardType | NoteType;

export const segmentFactory = (segmentData: SegmentType) => {
    if (!segmentData) {
        return <p>BOGUS SEGMENT</p>
    }
    switch (segmentData.type) {
        case 'cue-card':
            return <CueCard cuecard={segmentData}/>;
        case 'code':
            return <Code code={segmentData}/>;
        case 'note':
            return <Note note={segmentData}/>;
        default:
            throw new Error(`Invalid segment type ${segmentData.type}`);
    }
};
