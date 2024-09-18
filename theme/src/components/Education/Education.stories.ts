import { Meta, StoryObj } from '@storybook/vue3';
import Education from './Education.vue';

const meta: Meta<typeof Education> = {
  title: 'Components/Education',
  component: Education,
  argTypes: {
    education: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Education>;

export const Default: Story = {
  args: {
    title: 'Education',
    education: [
      {
        institution: 'Ynov Informatique',
        url: 'https://www.ynov.com/',
        area: 'Informatique',
        studyType: 'Bachelor',
        startDate: '2016-01-01',
        endDate: '2019-01-01',
        courses: ['Algorithmique', 'Programmation', 'Réseaux']
      },
      {
        institution: 'Université de Bordeaux',
        url: 'https://www.u-bordeaux.fr/',
        area: 'Informatique',
        studyType: 'Master',
        startDate: '2019-01-01',
        endDate: '2020-01-01',
        courses: ['IA', 'Big Data']
      }
    ]
  }
};
