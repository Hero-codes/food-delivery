'use client';

import { SingleImageDropzone } from '@/components/shared/single-image-dropzone';
import { Dispatch, SetStateAction } from 'react';

export type DropzoneProps = {
    file: File | undefined,
    setFile: Dispatch<SetStateAction<File | undefined>>
}

export function Dropzone({ file, setFile }: DropzoneProps) {
    return (
        <div>
            <SingleImageDropzone
                value={file}
                onChange={(file) => {
                    setFile(file);
                }}
            />
        </div>
    );
}