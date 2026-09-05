import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
export function ProductComparison({
  rows,
}: {
  rows: { feature: string; ovrld: string; basic: string }[];
}) {
  if (!rows.length) return null;
  return (
    <section className="section container">
      <p className="eyebrow lime">THE DETAILS / COMPARISON</p>
      <Table className="product-comparison">
        <TableCaption>
          Draft comparison — confirm every value before publication.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            <TableHead>OVRLD</TableHead>
            <TableHead>Basic</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.feature}>
              <TableCell>{row.feature}</TableCell>
              <TableCell>{row.ovrld}</TableCell>
              <TableCell>{row.basic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
