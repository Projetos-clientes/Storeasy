import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingRead({ only, fontSize }) {
    return (
        <Stack spacing={1}>
            <Rating
                style={{ fontSize: `${fontSize}px` }}
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly={only}
            />
        </Stack>
    );
}
