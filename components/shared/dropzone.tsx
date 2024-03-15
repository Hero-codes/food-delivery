'use client';

import { SingleImageDropzone } from '@/components/shared/single-image-dropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';

export function Dropzone() {
    const [file, setFile] = useState<File>();
    const { edgestore } = useEdgeStore();

    return (
        <div>
            <SingleImageDropzone
                value={file}
                onChange={(file) => {
                    setFile(file);
                }}
            />
            <button
                onClick={async () => {
                    if (file) {
                        const res = await edgestore.publicFiles.upload({
                            file,
                            onProgressChange: (progress) => {
                                // you can use this to show a progress bar
                                console.log(progress);
                            },
                        });
                        // you can run some server action or api here
                        // to add the necessary data to your database
                        console.log(res);
                    }
                }}
            >
            </button>
        </div>
    );
}