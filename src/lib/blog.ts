import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { BUSINESS } from '../data/site';
import { formatPostDate, getPost } from '../data/blog-posts';
import { absoluteUrl, blogPostingNode, canonicalUrl } from './schema';

export const BLOG_AUTHOR = BUSINESS.founder;

/**
 * Everything a blog post page needs about itself: the entry from POSTS, the
 * dateline text to pair with a <time datetime> element, and its Article markup.
 */
export async function blogPageMeta(pathname: string, heroImage: ImageMetadata) {
  const post = getPost(pathname);
  const imageUrl = absoluteUrl((await getImage({ src: heroImage, width: 1200, quality: 80 })).src);

  return {
    post,
    dateline: formatPostDate(post.datePublished, 'long'),
    schema: [
      blogPostingNode({
        pageUrl: canonicalUrl(pathname),
        headline: post.title,
        description: post.excerpt,
        datePublished: post.datePublished,
        imageUrl,
        authorName: BLOG_AUTHOR,
      }),
    ],
  };
}
