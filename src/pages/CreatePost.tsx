import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bold, Italic, Code, Image, Link2, List, Quote, Eye, Save, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    tags: '',
    slug: '',
    status: 'draft'
  });
  const [isPublishing, setIsPublishing] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
      setPost(prev => ({ ...prev, slug }));
    }
  };

  const handleSaveDraft = async () => {
    try {
      // Mock save draft
      toast({
        title: "Draft saved",
        description: "Your post has been saved as a draft.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save draft.",
        variant: "destructive",
      });
    }
  };

  const handlePublish = async () => {
    if (!post.title.trim() || !post.content.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please add a title and content before publishing.",
        variant: "destructive",
      });
      return;
    }

    setIsPublishing(true);
    try {
      // Mock publish
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Post published!",
        description: "Your post is now live and visible to everyone.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to publish post.",
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  const insertFormatting = (type: string) => {
    // Mock formatting insertion
    const textarea = document.querySelector('textarea[name="content"]') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let replacement = '';
    switch (type) {
      case 'bold':
        replacement = `**${selectedText || 'Bold text'}**`;
        break;
      case 'italic':
        replacement = `*${selectedText || 'Italic text'}*`;
        break;
      case 'code':
        replacement = `\`${selectedText || 'Code'}\``;
        break;
      case 'link':
        replacement = `[${selectedText || 'Link text'}](url)`;
        break;
      case 'list':
        replacement = `\n- ${selectedText || 'List item'}`;
        break;
      case 'quote':
        replacement = `\n> ${selectedText || 'Quote'}`;
        break;
      default:
        return;
    }

    const newContent = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    setPost(prev => ({ ...prev, content: newContent }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-bg transition-colors duration-300">
      <Navigation isAuthenticated />
      
      <div className="max-w-7xl mx-auto flex">
        {/* Main Editor */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="mb-8">
              <Input
                name="title"
                value={post.title}
                onChange={handleInputChange}
                placeholder="Post title..."
                className="text-4xl font-bold bg-transparent border-none text-gray-900 dark:text-brand-text placeholder-gray-400 dark:placeholder-brand-text3 focus:ring-0 p-0 h-auto"
                style={{ fontSize: '2.25rem' }}
              />
            </div>

            {/* Toolbar */}
            <div className="sticky top-20 z-10 bg-white/80 dark:bg-brand-bg2/80 backdrop-blur-lg border border-gray-200 dark:border-zinc-700 rounded-lg p-3 mb-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Bold className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Italic className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Code className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-gray-300 dark:bg-zinc-700 mx-2" />
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Link2 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Image className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-gray-300 dark:bg-zinc-700 mx-2" />
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <List className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Quote className="w-4 h-4" />
                </Button>
                
                <div className="flex-1" />
                
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-600 dark:text-brand-text2 hover:text-gray-900 dark:hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-bg3"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </div>

            {/* Content Editor */}
            <div className="mb-8">
              <Textarea
                name="content"
                value={post.content}
                onChange={handleInputChange}
                placeholder="Write your post content here... Use Markdown for formatting."
                className="min-h-[500px] bg-transparent border-none text-gray-900 dark:text-brand-text placeholder-gray-400 dark:placeholder-brand-text3 focus:ring-0 resize-none text-lg leading-relaxed"
              />
            </div>

            {/* Auto-save indicator */}
            <div className="text-center text-gray-500 dark:text-brand-text3 text-sm">
              <Save className="w-4 h-4 inline mr-1" />
              Draft saved automatically
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-brand-bg2 p-6">
          <div className="sticky top-24">
            {/* Publishing Actions */}
            <div className="mb-8">
              <div className="flex space-x-3 mb-4">
                <Button
                  onClick={handleSaveDraft}
                  className="btn-secondary flex-1"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button
                  onClick={handlePublish}
                  disabled={isPublishing}
                  className="btn-primary flex-1"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {isPublishing ? 'Publishing...' : 'Publish'}
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                Status: <span className="text-yellow-500 dark:text-yellow-400">Draft</span>
              </div>
            </div>

            {/* Post Settings */}
            <div className="space-y-6">
              <div>
                <Label className="text-brand-text font-medium mb-3 block">Featured Image</Label>
                <div className="border-2 border-dashed border-gray-300 dark:border-zinc-600 rounded-lg p-6 text-center hover:border-gray-400 dark:hover:border-zinc-500 transition-colors cursor-pointer">
                  <Image className="w-8 h-8 text-brand-text3 mx-auto mb-2" />
                  <p className="text-brand-text3 text-sm">Click to upload image</p>
                </div>
              </div>

              <div>
                <Label htmlFor="excerpt" className="text-brand-text font-medium">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={post.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief description of your post..."
                  className="mt-2 bg-brand-bg3 border-gray-200 dark:border-zinc-700 text-brand-text placeholder-brand-text3 focus:border-brand-blue"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="tags" className="text-brand-text font-medium">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={post.tags}
                  onChange={handleInputChange}
                  placeholder="react, javascript, tutorial"
                  className="mt-2 bg-brand-bg3 border-gray-200 dark:border-zinc-700 text-brand-text placeholder-brand-text3 focus:border-brand-blue"
                />
                <p className="text-brand-text3 text-sm mt-1">Separate tags with commas</p>
              </div>

              <div>
                <Label htmlFor="slug" className="text-brand-text font-medium">URL Slug</Label>
                <div className="mt-2 flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 dark:border-zinc-700 bg-brand-bg4 text-brand-text3 text-sm">
                    blognode.com/@you/
                  </span>
                  <Input
                    id="slug"
                    name="slug"
                    value={post.slug}
                    onChange={handleInputChange}
                    className="flex-1 rounded-l-none bg-brand-bg3 border-gray-200 dark:border-zinc-700 text-brand-text focus:border-brand-blue"
                  />
                </div>
              </div>

              {/* SEO Settings */}
              <div className="border-t border-gray-200 dark:border-zinc-700 pt-6">
                <h3 className="text-brand-text font-medium mb-4">SEO Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-brand-text text-sm">Meta Title</Label>
                    <Input
                      placeholder="SEO title (optional)"
                      className="mt-1 bg-brand-bg3 border-gray-200 dark:border-zinc-700 text-brand-text placeholder-brand-text3 focus:border-brand-blue"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-brand-text text-sm">Meta Description</Label>
                    <Textarea
                      placeholder="SEO description (optional)"
                      className="mt-1 bg-brand-bg3 border-gray-200 dark:border-zinc-700 text-brand-text placeholder-brand-text3 focus:border-brand-blue"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
