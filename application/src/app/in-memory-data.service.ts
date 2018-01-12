import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phrases = [
        { id: 11, line: 'Hi!' },
        { id: 12, line: 'Goodbye.' },
        { id: 13, line: 'Yes' },
        { id: 14, line: 'No.' },
        { id: 15, line: 'Probably.' },
        { id: 16, line: 'Ask again.' },
        { id: 17, line: 'Can not answer.' },
        { id: 18, line: 'How are you?' },
        { id: 19, line: 'Good luck!' },
        { id: 20, line: 'No idea.' }
    ];
    return {phrases};
  }
}