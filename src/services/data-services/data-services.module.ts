import { Module } from '@nestjs/common';
import { ElasticSearchDataServicesModule } from '../../frameworks/data-services/elastic-search/elastic-search-data-services.module';
import { MysqlDataServicesModule } from '../../frameworks/data-services/mysql/mysql-data-services.module';

@Module({
  imports: [ MysqlDataServicesModule, ElasticSearchDataServicesModule],
  exports: [ MysqlDataServicesModule, ElasticSearchDataServicesModule],
})
export class DataServicesModule {}
