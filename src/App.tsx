import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from './components/Layout';
import Home from './pages/Home';
import LearnHub from './pages/LearnHub';
import PillarGuide from './pages/PillarGuide';
import BlogPost from './pages/BlogPost';
import ToolPage from './pages/ToolPage';
import ServicesHub from './pages/ServicesHub';
import ServicePage from './pages/ServicePage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="learn">
              <Route index element={<LearnHub />} />
              <Route path="local-seo">
                <Route path="gbp-optimization-ai-playbook" element={<PillarGuide />} />
                <Route path="ai-prompts-gbp-posts" element={<BlogPost />} />
              </Route>
            </Route>
            
            <Route path="tools">
              {/* Dummy tools hub, since there isn't one specified I'll just route directly to the tool or provide a basic tools hub in future. Let's just create a route for the tool. */}
              <Route path="gbp-audit-tool" element={<ToolPage />} />
            </Route>
            
            <Route path="services">
              <Route index element={<ServicesHub />} />
              <Route path="local-seo-management" element={<ServicePage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
