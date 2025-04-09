import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const history = [
  {
    year: '1985',
    title: 'Founding',
    description: 'The Zeta Theta Chapter of Pi Kappa Phi was established at The University of Texas at Austin.',
  },
  {
    year: '2007',
    title: 'First Refounding',
    description: 'The chapter was rechartered, marking a new era of brotherhood and excellence.',
  },
  {
    year: '2024',
    title: 'Second Refounding',
    description: 'The chapter was rechartered once again, continuing our legacy of leadership and service.',
  },
];

const executiveBoard = [
  {
    name: 'John Doe',
    position: 'Archon',
    image: '/images/executive/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'Vice Archon',
    image: '/images/executive/jane-smith.jpg',
  },
  {
    name: 'Mike Johnson',
    position: 'Treasurer',
    image: '/images/executive/mike-johnson.jpg',
  },
  {
    name: 'Sarah Williams',
    position: 'Secretary',
    image: '/images/executive/sarah-williams.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Founded in 1985, the Zeta Theta Chapter of Pi Kappa Phi has been a cornerstone of leadership and brotherhood at The University of Texas at Austin.
          </p>
        </div>
      </Section>

      {/* History Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our History
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A timeline of our chapter's journey
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {history.map((event) => (
            <Card key={event.year} hover>
              <CardContent>
                <Badge variant="secondary" className="mb-4">
                  {event.year}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Executive Board Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Executive Board
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Meet our current leadership team
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {executiveBoard.map((member) => (
            <Card key={member.name} hover>
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mission Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pi Kappa Phi strives to create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of our communities.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developing leaders who make a difference in their communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Service</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Encouraging service to others through philanthropic efforts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Brotherhood</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building lifelong bonds of friendship and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 