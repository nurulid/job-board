import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">API</h2>
        <p className="text-sm text-gray-500">
          Source:{' '}
          <a
            href="https://www.arbeitnow.com/api/job-board-api"
            target="_blank"
            className="underline"
          >
            https://www.arbeitnow.com/api/job-board-api/
          </a>
        </p>
        <p></p>
      </div>

      <div>
        <h2 className="text-2xl mb-2">Design</h2>
        <p className="text-sm text-gray-500">
          Source:{' '}
          <a
            href="https://dribbble.com/shots/21587286-Job-Search-Platform"
            target="_blank"
            className="underline"
          >
            https://dribbble.com/shots/21587286-Job-Search-Platform
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-2xl mb-2">My Github</h2>
        <p className="text-sm text-gray-500">
          Source:{' '}
          <a
            href="https://github.com/nurulid/job-board"
            target="_blank"
            className="underline"
          >
            https://github.com/nurulid/job-board
          </a>
        </p>
      </div>
    </div>
  );
}
