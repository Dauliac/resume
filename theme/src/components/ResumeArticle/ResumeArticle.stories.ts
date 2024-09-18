import { Meta, StoryObj } from '@storybook/vue3';
import ResumeArticle from './ResumeArticle.vue';

const meta: Meta<typeof ResumeArticle> = {
  title: 'Components/ResumeArticle',
  component: ResumeArticle,
  argTypes: {
    sections: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof ResumeArticle>;

export const Default: Story = {
  args: {
    title: 'My Resume',
    sections: [
      {
        title: 'Professional Experience',
        content: 'A summary of my professional experiences.',
        items: [
          'Worked at Company A as a Senior Engineer.',
          'Led projects at Company B in cloud migration.'
        ]
      },
      {
        title: 'Education',
        content: 'A summary of my academic background.',
        items: [
          'Bachelor’s degree in Computer Science from University X.',
          'Master’s degree in Data Science from University Y.'
        ]
      }
    ]
  }
};
