export interface CourseCardData {
  title: string;
  subtitle: string;
  level: string; // e.g., "8 ème De base" or "9 ème De base"
  themeColor: 'math' | 'physics' | 'live'; // For coloring the background/elements
  imageContent: 'pi' | 'multimeter' | 'operations'; // For the main graphic
  isLive: boolean; // To show the 'LIVE' tag
}