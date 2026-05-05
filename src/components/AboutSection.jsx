import { Briefcase, Code, Cpu, Layers, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-2 md:px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-justify">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Technology Explorer
            </h3>

            <p className="text-muted-foreground text-left leading-relaxed text-justify">
              With over 5 years of hands-on experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>

            <p className="text-muted-foreground text-left leading-relaxed text-justify">
              I love building elegant solutions for complex challenges and am always exploring new technologies and techniques to stay ahead in the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1ENFegMtlEYGfC1nNJpOikSKV_JMwfQuO/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left text-justify">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground text-left leading-relaxed text-justify">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left text-justify">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground text-left leading-relaxed text-justify">
                    Building intelligent systems using TensorFlow and computer vision for real-time object detection and automation..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left text-justify">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-left leading-relaxed text-justify">
                    Building scalable, end-to-end web solutions using both front-end and back-end technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
