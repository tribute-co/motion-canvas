import {editor} from '@motion-canvas/ui';
import project from './project';

// Initialize the Motion Canvas editor
// The editor will handle the project settings properly
try {
  editor(project as any);
} catch (error) {
  console.error('Failed to initialize Motion Canvas editor:', error);
} 