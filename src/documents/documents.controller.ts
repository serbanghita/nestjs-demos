import {Body, Controller, Delete, Get, HttpCode, ImATeapotException, Param, Patch, Post, Query} from '@nestjs/common';
import {DocumentsService} from "./documents.service";

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}

    @Get()
    findAll(@Query() pagination) {
        const { limit, offset } = pagination;
        return this.documentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.documentsService.findOne(id);
    }

    @Post()
    create(@Body() body){
        this.documentsService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        this.documentsService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.documentsService.remove(id);
    }

}
