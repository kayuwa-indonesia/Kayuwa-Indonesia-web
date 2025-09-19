import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { SuggestBestOffersOutput } from '@/ai/flows/suggest-best-offers';

interface OfferResultsProps {
  results: SuggestBestOffersOutput;
}

export function OfferResults({ results }: OfferResultsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Recommendations</CardTitle>
        <CardDescription>
          Based on your requirements, here are the best matches from our
          catalog.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Product</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="w-[150px] text-center">
                Suitability
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.suggestedOffers.map((offer, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {offer.productName}
                </TableCell>
                <TableCell>
                  <p className="mb-1">{offer.description}</p>
                  <Badge variant="outline">
                    Availability: {offer.availability}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {offer.price}
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <Progress
                      value={offer.suitabilityScore}
                      className="h-2"
                      aria-label={`${offer.suitabilityScore}% suitability`}
                    />
                    <span className="text-xs text-muted-foreground">
                      {offer.suitabilityScore}% Match
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
