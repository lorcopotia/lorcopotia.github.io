import type { LegalDoc } from '@/lib/legal';
import {
  workoutTrackerPrivacyEs,
  workoutTrackerPrivacyEn,
} from './workout-tracker-privacy';
import {
  workoutTrackerDeletionEs,
  workoutTrackerDeletionEn,
} from './workout-tracker-data-deletion';

export const legalDocs: LegalDoc[] = [
  workoutTrackerPrivacyEs,
  workoutTrackerPrivacyEn,
  workoutTrackerDeletionEs,
  workoutTrackerDeletionEn,
];
