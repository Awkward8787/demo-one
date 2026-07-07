export type TextLinkData = {
  href: string;
  id: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="h-6 block cursor-pointer hover:underline" data-component="link" href={d.href} id={d.id}>
      <p data-cid={cids[1]} className="block text-foreground">
        {d.description}
      </p>
    </a>
  );
}
