import React from 'react';
import { Composition } from 'remotion';
import { TechVideoComposition } from './compositions/TechVideoComposition';
import { CodeRevealComposition } from './compositions/CodeRevealComposition';
import { DataVisualizationComposition } from './compositions/DataVisualizationComposition';
import { ProductDemoComposition } from './compositions/ProductDemoComposition';
import { tutorialSchema, productDemoSchema, presentationSchema } from './schemas/CompositionSchemas';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TechVideo"
        component={TechVideoComposition}
        durationInFrames={900} // 30 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={tutorialSchema}
        defaultProps={{
          title: "Advanced React Patterns",
          subtitle: "Master modern development techniques",
          codeSnippets: [
            {
              code: `const useAdvancedHook = () => {\n  const [state, setState] = useState();\n  return { state, setState };\n}`,
              language: 'typescript',
              highlightLines: [2]
            }
          ],
          brandColor: "#6366f1",
          logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop"
        }}
      />
      
      <Composition
        id="CodeReveal"
        component={CodeRevealComposition}
        durationInFrames={600} // 20 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={tutorialSchema}
        defaultProps={{
          title: "TypeScript Best Practices",
          codeSnippets: [
            {
              code: `interface UserProfile {\n  id: string;\n  name: string;\n  email: string;\n  preferences: UserPreferences;\n}`,
              language: 'typescript',
              highlightLines: [1, 4]
            }
          ],
          brandColor: "#3b82f6"
        }}
      />
      
      <Composition
        id="DataVisualization"
        component={DataVisualizationComposition}
        durationInFrames={750} // 25 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={presentationSchema}
        defaultProps={{
          title: "Analytics Dashboard",
          subtitle: "Real-time performance metrics",
          data: [
            { name: 'Jan', users: 400, revenue: 2400 },
            { name: 'Feb', users: 300, revenue: 1398 },
            { name: 'Mar', users: 600, revenue: 9800 },
            { name: 'Apr', users: 800, revenue: 3908 },
            { name: 'May', users: 700, revenue: 4800 }
          ],
          brandColor: "#10b981"
        }}
      />
      
      <Composition
        id="ProductDemo"
        component={ProductDemoComposition}
        durationInFrames={1200} // 40 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={productDemoSchema}
        defaultProps={{
          title: "Revolutionary API Platform",
          subtitle: "Build faster, scale better",
          features: [
            "Real-time webhooks",
            "Auto-scaling infrastructure", 
            "Advanced analytics",
            "Enterprise security"
          ],
          brandColor: "#8b5cf6",
          logoUrl: "https://images.unsplash.com/photo-1560472355-a9a6e904455b?w=200&h=200&fit=crop"
        }}
      />
    </>
  );
};