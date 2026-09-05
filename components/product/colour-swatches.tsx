'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { Colourway } from '@/data/products';
import { useId } from 'react';
export function ColourSwatches({
  colours,
  value,
  onChange,
}: {
  colours: Colourway[];
  value: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  return (
    <fieldset className="colour-fieldset">
      <legend>
        Colour{' '}
        <span className="muted">
          / {colours.find((colour) => colour.id === value)?.name}
        </span>
      </legend>
      <RadioGroup
        className="colour-options"
        value={value}
        onValueChange={(value) => onChange(String(value))}
        aria-label="Preview colourway"
      >
        {colours.map((colour) => (
          <div className="colour-option" key={colour.id}>
            <RadioGroupItem
              id={`${id}-${colour.id}`}
              value={colour.id}
              className="swatch"
              style={{ background: `var(${colour.token})` }}
              aria-label={colour.name}
            />
            <label htmlFor={`${id}-${colour.id}`}>{colour.name}</label>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
