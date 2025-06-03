# [Bloggly] - A Multi-User Blogging Platform


**[Bloggly]** is a modern, feature-rich, multi-user blogging platform inspired by services like Hashnode and Medium. It empowers individual bloggers and publication teams to create, collaborate, and share their content with the world. Built with a focus on a sleek dark-themed UI, robust features, and a developer-friendly stack.

**Live Demo:** [Link to Live Demo (e.g., your Vercel deployment)] (Coming Soon!)

## ✨ Features

This platform aims to provide a comprehensive blogging experience.

**MVP Core Features:**

*   **User Authentication & Management:**
    *   Sign up (Email/Password, Google, GitHub, LinkedIn, Apple via Supabase Auth).
    *   Magic Link Authentication.
    *   Login, Logout, Password Reset.
    *   User Profiles: Customizable display name, username, bio, avatar (with client-side cropping), social links, custom CSS.
    *   Real-time username availability check.
*   **Post Management:**
    *   CRUD operations for posts.
    *   Rich Text Editor (Tiptap-based) with Markdown support.
    *   Image uploads within the editor.
    *   Code blocks with syntax highlighting.
    *   Auto-save for drafts.
    *   Local storage draft recovery.
    *   Publishing: Save drafts, publish, unpublish.
    *   Tags/Categories: Autocomplete tagging system.
    *   Featured images for posts.
*   **Content Discovery:**
    *   Homepage feed: Latest and "Trending" posts.
    *   Infinite scrolling/pagination for feeds.
    *   Individual user profile pages (`/username`) listing their posts.
    *   Public post view pages (`/username/post-slug`).
*   **Commenting System:**
    *   Users can comment on posts.
    *   Threaded comments.
    *   Real-time comment updates (via Supabase Realtime).
    *   Markdown support in comments (rendered safely).
    *   Mentions (`@username`) in comments.
*   **Basic SEO:**
    *   Clean, SEO-friendly URLs.
    *   Dynamic page titles and meta descriptions.
    *   Structured Data (JSON-LD for Articles & Profiles).
    *   Dynamic `robots.txt` and `sitemap.xml`.
    *   Canonical URLs.

**Post-MVP & Advanced Features (Planned/In Progress):**

*   **Analytics:**
    *   Post views, basic unique visitor tracking (privacy-conscious).
    *   Referrer tracking, engagement metrics.
    *   Dashboard for bloggers with client-side charting.
*   **AI Tools (Leveraging free tiers or future paid APIs):**
    *   AI Writing Assistant (title suggestions, summarization, etc. via Hugging Face or OpenAI).
*   **Collaboration ("Shared Posts"):**
    *   Invite co-authors to posts.
    *   Role-based permissions for collaborators (Author, Editor).
    *   Shared draft review process.
    *   Email notifications for collaboration invites (via Resend).
    *   Activity log for collaborative posts.
*   **Customization:**
    *   User-defined custom CSS for profiles (sanitized).
*   **Engagement Features:**
    *   Likes/Reactions on posts and comments.
    *   Following users/blogs.
    *   Real-time in-app notifications (via Supabase Realtime).
    *   Email notifications for critical events (via Resend).
*   **Series/Playlists:** Grouping posts.
*   **Admin Tools & Moderation:**
    *   User management (view, ban/suspend - for platform admin).
    *   Content moderation (flagging system, admin review dashboard).
    *   Spam filtering for comments (Akismet integration).

## 🚀 Tech Stack

*   **Frontend:** Next.js (React Framework)
    *   Styling: Tailwind CSS
    *   State Management: Zustand / Jotai (or React Context)
    *   Data Fetching: React Query (TanStack Query) / SWR
    *   Rich Text Editor: Tiptap
*   **Backend:** Next.js API Routes & Supabase
    *   Database: Supabase (PostgreSQL)
    *   Authentication: Supabase Auth
    *   Storage: Supabase Storage (potentially Cloudinary for advanced image optimization)
    *   Realtime: Supabase Realtime
    *   Edge Functions: Supabase Edge Functions (Deno/TypeScript) for scheduled tasks (e.g., trending posts).
    *   Input Validation: Zod
*   **Deployment:**
    *   Frontend & API Routes: Vercel
    *   Supabase: Cloud-hosted
*   **Third-Party Services (Free Tiers):**
    *   Transactional Emails: Resend
    *   Comment Spam Filtering: Akismet
    *   Error Tracking: Sentry.io
    *   AI (Optional/Exploratory): Hugging Face Inference API

## 🖼️ Screenshots (Coming Soon!)


*   *Landing Page*
*   *User Dashboard*
*   *Post Editor*
*   *Public Post View*

## 🛠️ Local Development Setup

Follow these steps to get the project running locally:

**Prerequisites:**

*   Node.js (v18.x or later recommended)
*   npm / yarn / pnpm
*   Git
*   Supabase Account & Project:
    *   Set up a new project on [Supabase](https://supabase.com/).
    *   You will need your Project URL and `anon` key. For backend operations in API routes, you'll also need the `service_role` key.
*   (Optional) Supabase CLI: For local Supabase development and migrations. Install from [here](https://supabase.com/docs/guides/cli).
*   (Optional) Vercel CLI: For local testing that mimics Vercel environment.

**1. Clone the Repository:**

```bash
git clone https://github.com/[VahantSharma]/[Bloggly].git
```

**2. Install Dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install