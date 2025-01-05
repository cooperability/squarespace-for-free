import ImageWithLoader from '@/components/shared/ImageWithLoader';
import { getProjects } from '@/lib/contentful';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <div key={project.sys.id}>
            <ImageWithLoader
              src={project.fields.mainImage?.fields.file.url || ''}
              alt={project.fields.title}
              width={400}
              height={300}
              className="w-full aspect-[4/3] object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{project.fields.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
} 