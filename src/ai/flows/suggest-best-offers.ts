'use server';

/**
 * @fileOverview AI flow to suggest the best product offers based on user needs.
 *
 * - suggestBestOffers - A function that suggests the best product offers.
 * - SuggestBestOffersInput - The input type for the suggestBestOffers function.
 * - SuggestBestOffersOutput - The return type for the suggestBestOffers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBestOffersInputSchema = z.object({
  projectType: z.string().describe('The type of project the plywood will be used for (e.g., furniture, construction, etc.).'),
  materialPreferences: z.string().describe('Any preferences for plywood material (e.g., hardwood, softwood, specific species).'),
  sizeRequirements: z.string().describe('The required dimensions or size of the plywood sheets.'),
  quantityNeeded: z.number().describe('The quantity of plywood sheets needed for the project.'),
  budget: z.string().describe('The budget range for the plywood purchase.'),
  desiredFeatures: z.string().describe('Any desired features, such as water resistance, fire retardancy, or specific finishes.'),
});

export type SuggestBestOffersInput = z.infer<typeof SuggestBestOffersInputSchema>;

const SuggestBestOffersOutputSchema = z.object({
  suggestedOffers: z.array(
    z.object({
      productName: z.string().describe('The name of the plywood product.'),
      description: z.string().describe('A brief description of the product and its features.'),
      price: z.string().describe('The price of the product per sheet or unit.'),
      availability: z.string().describe('The availability or lead time for the product.'),
      suitabilityScore: z.number().describe('A score indicating how well the product matches the user needs (out of 100).'),
    })
  ).describe('A list of suggested plywood product offers based on the user needs.'),
});

export type SuggestBestOffersOutput = z.infer<typeof SuggestBestOffersOutputSchema>;

export async function suggestBestOffers(input: SuggestBestOffersInput): Promise<SuggestBestOffersOutput> {
  return suggestBestOffersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBestOffersPrompt',
  input: {schema: SuggestBestOffersInputSchema},
  output: {schema: SuggestBestOffersOutputSchema},
  prompt: `You are an AI assistant specializing in suggesting the best plywood product offers to customers based on their needs.

  Given the following user needs and preferences, suggest a list of plywood product offers that best match their requirements.
  Each offer should include the product name, a brief description, price, availability, and a suitability score (out of 100).

  User Needs:
  - Project Type: {{{projectType}}}
  - Material Preferences: {{{materialPreferences}}}
  - Size Requirements: {{{sizeRequirements}}}
  - Quantity Needed: {{{quantityNeeded}}}
  - Budget: {{{budget}}}
  - Desired Features: {{{desiredFeatures}}}
  `,
});

const suggestBestOffersFlow = ai.defineFlow(
  {
    name: 'suggestBestOffersFlow',
    inputSchema: SuggestBestOffersInputSchema,
    outputSchema: SuggestBestOffersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
