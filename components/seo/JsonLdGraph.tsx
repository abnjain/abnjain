type JsonLdGraphProps = {
  schema: Record<string, unknown>;
};

export function JsonLdGraph({ schema }: JsonLdGraphProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
