import React from 'react';
import CourseCard from './CourseCard';

const CoursesGrid = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CourseCard
        title="UX Design Foundations"
        description="Master the fundamentals of design to build a solid foundation in creating user-focused designs."
        level="Beginner"
        duration="6 hours"
        icon="🎨"
      />
      <CourseCard
        title="Introduction to Figma"
        description="Master Figma's core features from the basics to advanced design techniques and beyond."
        level="Beginner"
        duration="4 hours"
        icon="🖌️"
      />
      <CourseCard
        title="Design Terminology"
        description="This glossary is a perfect introduction to design terminology for non-designers."
        level="Beginner"
        duration="2 hours"
        icon="📖"
      />
      <CourseCard
        title="UX Writing"
        description="Learn how to write effective copy that helps users easily communicate with you."
        level="Intermediate"
        duration="5 hours"
        icon="✍️"
      />
      <CourseCard
        title="UI Components"
        description="Learn how to use the basic UI components to create visual hierarchy in your designs."
        level="Intermediate"
        duration="3 hours"
        icon="🖥️"
      />
      <CourseCard
        title="Common Design Patterns"
        description="Explore the most useful design patterns to create a consistent design and more."
        level="Advanced"
        duration="8 hours"
        icon="🔍"
      />
    </div>
  );
};

export default CoursesGrid;