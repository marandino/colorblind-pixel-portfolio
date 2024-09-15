import { useState, useEffect } from 'react';
import { ImageWithMetadata } from '../types';

const parseImageData = (resource: unknown): ImageWithMetadata | undefined => {
  if (typeof resource === 'object' && resource !== null) {
    const { caption, description, alt, public_id } = resource as {
      caption: string;
      description: string;
      alt: string;
      public_id: string;
    };
    return { caption, description, alt, public_id };
  }
  return undefined;
};

const fetchTagData = async (tag: string): Promise<ImageWithMetadata[]> => {
  try {
    const response = await fetch(`https://res.cloudinary.com/dkhpxyxnt/image/list/${tag}.json`);
    const data = await response.json();
    return data.resources
      .map((resource: unknown) => parseImageData(resource))
      .filter((image: ImageWithMetadata | undefined): image is ImageWithMetadata => image !== undefined);
  } catch (error) {
    console.error(`Error fetching images for tag ${tag}:`, error);
    return [];
  }
};

export const useCloudinaryImages = (tag: string) => {
  const [images, setImages] = useState<ImageWithMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchTagData(tag);
        setImages(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred while fetching images'));
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [tag]);

  return { images, loading, error };
};