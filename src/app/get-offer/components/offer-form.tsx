'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  suggestBestOffers,
  SuggestBestOffersInput,
  SuggestBestOffersOutput,
} from '@/ai/flows/suggest-best-offers';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { OfferResults } from './offer-results';

const formSchema = z.object({
  projectType: z
    .string()
    .min(3, { message: 'Please describe your project type.' }),
  materialPreferences: z.string().optional(),
  sizeRequirements: z.string().min(3, {
    message: 'Please specify the size requirements (e.g., 4ft x 8ft).',
  }),
  quantityNeeded: z.coerce
    .number()
    .min(1, { message: 'Quantity must be at least 1.' }),
  budget: z.string().min(2, { message: 'Please provide a budget range.' }),
  desiredFeatures: z.string().optional(),
});

export function OfferForm() {
  const [suggestions, setSuggestions] =
    useState<SuggestBestOffersOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SuggestBestOffersInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: '',
      materialPreferences: '',
      sizeRequirements: '',
      quantityNeeded: 1,
      budget: '',
      desiredFeatures: '',
    },
  });

  async function onSubmit(values: SuggestBestOffersInput) {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await suggestBestOffers(values);
      setSuggestions(result);
    } catch (e) {
      console.error(e);
      setError('Failed to get suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">
            Describe Your Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Kitchen Cabinets, Outdoor Decking"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        What will you be building?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="materialPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Material Preferences (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Birch, Marine grade"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Any specific wood or type you prefer?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sizeRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Size Requirements</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 4ft x 8ft x 18mm" {...field} />
                      </FormControl>
                      <FormDescription>
                        Sheet dimensions and thickness.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantityNeeded"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Needed</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        How many sheets do you need?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., $50-$70 per sheet" {...field} />
                      </FormControl>
                      <FormDescription>Your approximate budget.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desiredFeatures"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired Features (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Water resistance, specific finish, FSC certified"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Any other requirements?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-destructive">{error}</p>
              )}

              <Button type="submit" disabled={isLoading} size="lg" className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-5 w-5" />
                )}
                {isLoading ? 'Analyzing...' : 'Get Suggestions'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Our AI is thinking...</p>
        </div>
      )}

      {suggestions && suggestions.suggestedOffers.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6 font-headline">
            Here Are Your Suggested Offers
          </h2>
          <OfferResults results={suggestions} />
        </div>
      )}
    </>
  );
}
