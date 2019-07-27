import React from 'react';
import styles from './index.less';
import { Card as TDCard } from '@td/design';
import { Breadcrumb, Row, Col } from 'antd';

interface BreadcrumbListType {
  title: string | React.ReactNode;
  url?: string;
}

const breadcrumbList = [
  {
    title: '首页',
  },
  {
    title: '详情页',
  },
  {
    title: '标准详情',
  },
];
const storeDetails = [
  { label: '招商标题', value: '济南市历下区5000m²普通仓' },
  { label: '要求最低面积', value: '3000m²' },
  { label: '要求仓库位置', value: '山东省济南市历下区' },
  { label: '预计租期', value: '3年以上' },
  { label: '储存类型', value: '储存仓' },
  { label: '仓库模式', value: '平库' },
  { label: '配套设施', value: '月台、停车场' },
  { label: '适宜行业', value: '电商' },
];
const requireDetails = [
  { label: '是否在建', value: '是' },
  { label: '是否厂房改建', value: '否' },
  { label: '是否有消防检验', value: '是' },
  { label: '底层承重要求', value: '10吨/m²' },
  { label: '底层层高', value: '3.6m' },
  { label: '地坪功能', value: '耐磨、防尘' },
  { label: '地坪材料', value: '混泥土、地砖' },
  { label: '防火等级', value: '适合于丙二类货物' },
  { label: '耐火等级', value: '一级' },
  { label: '其他说明', value: '无' },
];
const operatorsDetails = [
  { label: '运营商公司', value: '盖世物流' },
  { label: '运营商联系人', value: '张先生' },
  { label: '职务部门', value: '仓库经理' },
  { label: '联系电话', value: '13512341223' },
  { label: '联系邮箱', value: '--' },
  { label: '紧急联系电话', value: '13223141214' },
];
const historicalRejectionList = [
  {
    id: 1,
    statusDesc: '已驳回',
    date: '2018-11-09 16:45',
    remark: '备注：提交资料有错误',
  },
  {
    id: 2,
    statusDesc: '已驳回',
    date: '2018-11-09 16:45',
    remark: '备注：信息有错误',
  },
];

const DetailBlock: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.breadcrumb}>
        <Breadcrumb>
          {breadcrumbList.map(({ title, url }: BreadcrumbListType, index) => (
            <Breadcrumb.Item key={`${title}_${index}`}>
              {url ? <a href={url}>{title}</a> : title}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div className={styles.detail}>
        <div className={`${styles['detail-card']} ${styles['border-bottom']}`}>
          <TDCard title="仓库拓展信息">
            <Row gutter={36} className={styles['detail-item']}>
              {storeDetails.map(({ label, value }, index) => (
                <Col span={8} key={`${label}_${index}`}>
                  <span className={styles.label}>{label}：</span>
                  <span className={styles.value}>{value}</span>
                </Col>
              ))}
            </Row>
          </TDCard>
        </div>
        <div className={`${styles['detail-card']} ${styles['border-bottom']}`}>
          <TDCard title="详细需求">
            <Row gutter={36} className={styles['detail-item']}>
              {requireDetails.map(({ label, value }, index) => (
                <Col span={8} key={`${label}_${index}`}>
                  <span className={styles.label}>{label}：</span>
                  <span className={styles.value}>{value}</span>
                </Col>
              ))}
            </Row>
          </TDCard>
        </div>
        <div className={`${styles['detail-card']} ${styles['border-bottom']}`}>
          <TDCard title="运营商信息">
            <Row gutter={36} className={styles['detail-item']}>
              {operatorsDetails.map(({ label, value }, index) => (
                <Col span={8} key={`${label}_${index}`}>
                  <span className={styles.label}>{label}：</span>
                  <span className={styles.value}>{value}</span>
                </Col>
              ))}
            </Row>
          </TDCard>
        </div>
        <div className={styles['detail-card']}>
          <TDCard title="历史驳回原因">
            {historicalRejectionList.map(({ statusDesc, date, remark, id }) => (
              <Row key={id} gutter={36} className={styles['detail-table-item']}>
                <Col className={styles.warn} span={2}>
                  {statusDesc}
                </Col>
                <Col span={4}>{date}</Col>
                <Col span={18}>{remark}</Col>
              </Row>
            ))}
          </TDCard>
        </div>
      </div>
    </div>
  );
};

export default DetailBlock;
