import { Meta, StoryObj } from '@storybook/vue3';
import Work from './Work.vue';

const meta: Meta<typeof Work> = {
  title: 'Components/Work',
  component: Work,
  argTypes: {
    work: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Work>;

export const Default: Story = {
  args: {
    title: 'Professional Experience',
    work: [
      {
        name: 'Ynov Informatique',
        position: 'Enseignant',
        url: 'https://www.ynov.com/',
        startDate: '2024',
        endDate: '2025',
        summary: "Enseignement d'un module sur l'attaque des supply chains en Master cyber sécurité."
      },
      {
        name: 'Sellsy',
        position: 'DevOps',
        url: 'https://www.sellsy.com',
        startDate: '2021-01-01',
        endDate: '2024',
        summary: "Gestion du parc, DevOps, CI/CD. Intégration de fusions acquisitions, migration vers le cloud, mise en place d'une developer platform et d'une solution de monitoring.",
        highlights: [
          "Mise en place d'intégration continue (CI/CD)",
          "Migration au cloud et à Kubernetes",
          "Mise en place d'une Identity Provider (IDP)",
          "Mise en place d'une solution de monitoring",
          "Intégration de fusions et acquisitions"
        ]
      },
      {
        name: 'Ubiwan',
        position: 'DevOps',
        url: 'https://www.ubiwan.net/',
        startDate: '2019',
        endDate: '2021',
        summary: "CICD DevOps, migration vers un multi-cloud on-premise."
      },
      {
        name: 'SimforHealth',
        position: 'DevOps, Développement Web',
        url: 'https://simforhealth.fr/',
        startDate: '2018',
        endDate: '2019',
        summary: "DevOps, développement web, mise en place de CI/CD, containers, infrastructure as code."
      }
    ]
  }
};
