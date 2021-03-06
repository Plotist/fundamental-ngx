import { Component } from '@angular/core';

import { VhdDataProvider, VhdValue, VhdValueChangeEvent, ValueHelpDialogDataSource, VhdIncludedEntity, VhdExcludedEntity, VhdFilter, VhdDefineStrategy } from '@fundamental-ngx/platform';

interface ExampleTestModel {
  id: number;
  name: string;
  code: string;
  city: string;
  zipcode: string;
  address: string;
  nickname: string;
}

const exampleDataSource = () => {
  const dataSource = Array(137).fill(null).map((_value, index) => {
    return {
      id: index + 1,
      name: `Name ${index + 1}`,
      code: `${Math.floor(Math.random() * 99999)}`,
      city: `City ${Math.floor(Math.random() * index)}`,
      zipcode: `zipcode ${Math.floor(Math.random() * index)}`,
      address: `Address ${Math.floor(Math.random() * index)}`,
      nickname: `Nickname ${Math.floor(Math.random() * index)}`
    }
  })
  return {
    dataSource: dataSource,
    filters: Object.keys(dataSource[0]).map((value, index) => {
      return {
        key: value,
        name: `${value}`,
        label: `Product ${value}`,
        advanced: index > 0,
        include: true,
        exclude: true
      }
    })
  }
}

const data = exampleDataSource();

@Component({
  selector: 'fdp-platform-vhd-basic-example',
  templateUrl: './platform-vhd-basic-example.component.html'
})
export class PlatformVhdBasicExampleComponent {
  filters = data.filters;
  dataSource = new ValueHelpDialogDataSource(new VhdDataProvider(data.dataSource));

  actualValue: VhdValue<ExampleTestModel[]> = {};

  actualItems = [];
  formatTokenFn = ((value: VhdValue<ExampleTestModel[]>) => {
    this.actualItems = [
      ...(value.selected || []).map(item => item.name),
      ...(value.included || []).map(item => this.conditionDisplayFn(item)),
      ...(value.excluded || []).map(item => this.conditionDisplayFn(item))
    ];
  }).bind(this);
  conditionDisplayFn = (item: VhdIncludedEntity | VhdExcludedEntity) => {
    let value = (() => {
      switch (item.strategy) {
        case VhdDefineStrategy.empty:
          return null;
        case VhdDefineStrategy.between:
          return `${item.value}...${item.valueTo}`;
        case VhdDefineStrategy.contains:
          return `*${item.value}*`;
        case VhdDefineStrategy.equalTo:
          return `=${item.value}`;
        case VhdDefineStrategy.startsWith:
          return `${item.value}*`;
        case VhdDefineStrategy.endsWith:
          return `*${item.value}`;
        case VhdDefineStrategy.greaterThan:
          return `>${item.value}`;
        case VhdDefineStrategy.greaterThanEqual:
          return `>=${item.value}`;
        case VhdDefineStrategy.lessThan:
          return `<${item.value}`;
        case VhdDefineStrategy.lessThanEqual:
          return `<=${item.value}`;
      }
    })();
    if (value && item.type === 'exclude') {
      value = `!(${value})`;
    }

    return value;
  };

  valueChange($event: VhdValueChangeEvent<ExampleTestModel[]>): void {
    this.actualValue = {...$event};
  }
}
