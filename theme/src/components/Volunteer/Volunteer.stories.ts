import { Meta, StoryObj } from '@storybook/vue3';
import Volunteer from './Volunteer.vue';

const meta: Meta<typeof Volunteer> = {
  title: 'Components/Volunteer',
  component: Volunteer,
  argTypes: {
    volunteer: { control: 'array' },
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Volunteer>;

export const Default: Story = {
  args: {
    title: 'Volunteer Work',
    volunteer: [
      {
        organization: 'Code for Good',
        position: 'Volunteer Developer',
        url: 'https://www.codeforgood.org/',
        startDate: '2021-01-01',
        endDate: '2021-02-01',
        summary: 'Developed web applications for non-profits to help them manage resources more efficiently. Worked closely with designers and project managers to implement new features.',
      },
      {
        organization: 'Tech for All',
        position: 'Mentor',
        url: 'https://www.techforall.org/',
        startDate: '2019-06-01',
        endDate: '2020-12-31',
        summary: 'Mentored underprivileged students in basic coding and helped them build simple projects using HTML, CSS, and JavaScript.',
      },
      {
        organization: 'Clean the Oceans Initiative',
        position: 'Event Organizer',
        url: 'https://www.cleanoceans.org/',
        startDate: '2018-03-15',
        endDate: '2019-05-15',
        summary: 'Organized beach clean-up events involving over 200 volunteers in different coastal cities. Coordinated logistics and promoted environmental awareness through social media campaigns.',
      },
      {
        organization: 'Animal Shelter Helpers',
        position: 'Community Outreach',
        url: 'https://www.animalshelterhelpers.org/',
        startDate: '2017-02-01',
        endDate: '2018-02-01',
        summary: 'Managed community outreach programs to increase public awareness about adopting pets from shelters. Helped raise funds for local animal shelters.',
      },
    ],
  },
};
