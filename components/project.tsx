import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { DARK_COLORS, FOCUS_VISIBLE_OUTLINE } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { MainProjectItem, Project } from "@/types";
import { useHover } from "@react-aria/interactions";
import { RoughNotation } from "react-rough-notation";

interface ProjectsProps {
  projects?: MainProjectItem[];
}

export default function Project({
  project,
  color,
}: {
  project: Project;
  color: string;
}) {
  let { hoverProps, isHovered } = useHover({});
  return (
    <>
      <Link
        href={project.url ? project.url : "/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={cn("block rounded-xl", FOCUS_VISIBLE_OUTLINE)}>
          <div {...hoverProps}>
            {project.image ? (
              <Tilt
                transitionSpeed={1000}
                tiltMaxAngleY={8}
                tiltMaxAngleX={8}
                scale={1.01}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareBorderRadius="11px"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  priority={true}
                  className="rounded-xl"
                />
              </Tilt>
            ) : null}
            <p className="mt-4 text-xl font-bold text-gray-800">
              {project.name}
            </p>
            <p className="mt-2 text-gray-700 line-clamp-2">
              {project.description}
            </p>
            {project.url ? (
              <div className="mt-2">
                <RoughNotation
                  type="underline"
                  show={isHovered}
                  strokeWidth={2}
                  iterations={1}
                  padding={2}
                  animationDuration={300}
                  color={color}
                >
                  <span className="font-semibold text-gray-800">
                    View Project
                  </span>
                </RoughNotation>
              </div>
            ) : null}
          </div>
        </span>
      </Link>
    </>
  );
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Projects</h2>
      <h4 className="mt-2 text-gray-500 lg:text-lg">
        Some of the side projects I&apos;m currently working on:
      </h4>

      <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6 mb-7">
        {projects?.map((project, idx) => (
          <div key={idx} className="mt-12 lg:w-1/2 lg:px-6">
            <Project
              project={{
                name: project.title,
                description: project.description,
                image: `/${project.image}`,
                url: project.href,
              }}
              color={DARK_COLORS[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
