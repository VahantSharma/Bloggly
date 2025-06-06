
import React, { useState } from 'react';
import { TrendingUp, Clock, Users, Star, BookOpen, ExternalLink, Github, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Community = () => {
  const [activeTab, setActiveTab] = useState<'personalized' | 'featured' | 'trending'>('personalized');

  // Mock data for posts
  const mockPosts = [
    {
      id: '1',
      title: 'Building Modern Web Applications with React and TypeScript',
      excerpt: 'Learn how to create scalable and maintainable web applications using React, TypeScript, and modern development practices.',
      author: {
        username: 'johndoe',
        displayName: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
      publishedAt: '2023-12-15T10:00:00Z',
      readTime: 8,
      slug: 'building-modern-web-applications',
      tags: ['React', 'TypeScript', 'Web Development'],
      stats: {
        views: 1234,
        likes: 89,
        comments: 23
      }
    },
    {
      id: '2',
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build websites and web applications.',
      author: {
        username: 'sarahchen',
        displayName: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9a93ade?w=100&h=100&fit=crop&crop=face'
      },
      featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      publishedAt: '2023-12-14T15:30:00Z',
      readTime: 12,
      slug: 'future-of-ai-web-development',
      tags: ['AI', 'Machine Learning', 'Future Tech'],
      stats: {
        views: 2156,
        likes: 156,
        comments: 45
      }
    },
    {
      id: '3',
      title: 'Advanced CSS Techniques for Modern Layouts',
      excerpt: 'Discover powerful CSS features that will help you create stunning, responsive layouts.',
      author: {
        username: 'mikejohnson',
        displayName: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      publishedAt: '2023-12-13T09:15:00Z',
      readTime: 6,
      slug: 'advanced-css-techniques',
      tags: ['CSS', 'Frontend', 'Design'],
      stats: {
        views: 892,
        likes: 67,
        comments: 18
      }
    }
  ];

  const trendingArticles = [
    { title: 'Building a Full-Stack App with Next.js 14', author: 'Alex Chen' },
    { title: 'Understanding WebAssembly Performance', author: 'Maria Rodriguez' },
    { title: 'Modern Authentication Patterns', author: 'David Kim' },
    { title: 'React Server Components Deep Dive', author: 'Emma Wilson' },
    { title: 'TypeScript 5.0 New Features', author: 'Chris Taylor' }
  ];

  const tabs = [
    { id: 'personalized', label: 'Personalized', icon: Users },
    { id: 'featured', label: 'Featured', icon: Star },
    { id: 'trending', label: 'Trending', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navigation isAuthenticated />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-brand-text mb-2">Community</h1>
              <p className="text-brand-text2">Discover amazing content from developers around the world</p>
            </div>

            {/* Feed Tabs */}
            <div className="mb-8">
              <div className="flex space-x-1 bg-brand-bg2 p-1 rounded-lg border border-zinc-700">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-colors flex-1 justify-center ${
                        activeTab === tab.id
                          ? 'bg-brand-blue text-white'
                          : 'text-brand-text2 hover:text-brand-text hover:bg-brand-bg3'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="space-y-8">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button className="btn-secondary">
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 space-y-6">
            {/* Personalize Feed Widget */}
            <div className="bg-brand-bg2 rounded-xl border border-zinc-700 p-6">
              <h3 className="text-lg font-semibold text-brand-text mb-3">Personalize your feed</h3>
              <p className="text-brand-text2 text-sm mb-4">
                Follow more tags and authors to improve your feed.
              </p>
              <Button className="btn-primary w-full">Manage preferences</Button>
            </div>

            {/* Trending Articles Widget */}
            <div className="bg-brand-bg2 rounded-xl border border-zinc-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-brand-blue" />
                <h3 className="text-lg font-semibold text-brand-text">Trending on BlogNode</h3>
              </div>
              <div className="space-y-3">
                {trendingArticles.map((article, index) => (
                  <div key={index} className="border-b border-zinc-700 last:border-b-0 pb-3 last:pb-0">
                    <h4 className="text-brand-text text-sm font-medium mb-1 hover:text-brand-blue cursor-pointer transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-brand-text3 text-xs">by {article.author}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bookmarks Widget */}
            <div className="bg-brand-bg2 rounded-xl border border-zinc-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5 text-brand-purple" />
                <h3 className="text-lg font-semibold text-brand-text">Bookmarks</h3>
              </div>
              <p className="text-brand-text2 text-sm mb-4">
                Save articles to read later.
              </p>
              <Button variant="outline" className="w-full bg-brand-bg3 border-zinc-700 text-brand-text hover:bg-brand-bg4">
                View your bookmarks
              </Button>
            </div>

            {/* Community Links Widget */}
            <div className="bg-brand-bg2 rounded-xl border border-zinc-700 p-6">
              <h3 className="text-lg font-semibold text-brand-text mb-4">Around the Web</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-brand-text2 hover:text-brand-blue transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">Join our Discord</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
                <a href="#" className="flex items-center space-x-3 text-brand-text2 hover:text-brand-blue transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
                <a href="#" className="flex items-center space-x-3 text-brand-text2 hover:text-brand-blue transition-colors">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Product Hunt Page</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
                <a href="#" className="flex items-center space-x-3 text-brand-text2 hover:text-brand-blue transition-colors">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Community Guidelines</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
