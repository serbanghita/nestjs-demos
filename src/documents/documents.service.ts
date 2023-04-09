import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {DocumentEntity} from "./document.entity";

@Injectable()
export class DocumentsService {
    private documents: DocumentEntity[] = [
        {
            id: "1234",
            title: "First document",
            description: "This is a description",
            content: "...",
            lastUpdate: 1234567
        }
    ];

    findAll(): DocumentEntity[] {
        return this.documents;
    }

    findOne(id: string) {
        const document = this.documents.find(document => document.id === id);
        if (!document) {
            throw new NotFoundException(`Document with id #${id} was not found.`);
        }
        return document;
    }

    create(documentDto: Partial<DocumentEntity>) {
        documentDto.lastUpdate = Date.now();
        this.documents.push(documentDto as DocumentEntity);
    }

    update(id: string, documentDto: Partial<DocumentEntity>) {
        const document = this.findOne(id);
        if (document) {
            // Update
        }
    }

    remove(id: string) {
        const index = this.documents.findIndex(document => document.id === id);
        if (index !== -1) {
            this.documents.splice(index, 1);
        }
    }
}
