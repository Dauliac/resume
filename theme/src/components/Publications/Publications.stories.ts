import { Meta, StoryObj } from '@storybook/vue3';
import Publications from './Publications.vue';

const meta: Meta<typeof Publications> = {
  title: 'Components/Publications',
  component: Publications,
  argTypes: {
    publications: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Publications>;

export const Default: Story = {
  args: {
    title: 'Publications',
    publications: [
      {
        name: 'Understanding Kubernetes',
        publisher: 'Tech Press',
        releaseDate: '2023-06-15',
        url: 'https://example.com/understanding-kubernetes',
        summary: 'A comprehensive guide to understanding Kubernetes and its ecosystem.'
      },
      {
        name: 'DevOps Best Practices',
        publisher: 'DevOps Daily',
        releaseDate: '2022-03-10',
        url: 'https://example.com/devops-best-practices',
        summary: 'An article discussing the best practices in the DevOps world.'
      }
    ]
  }
};
