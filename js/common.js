(function() {
	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		
		if(document.querySelector('#select-vallet') !== null) {
			var selectedIndex = 0;

			var lcSelect = new lc_select('#select-vallet', {
				wrap_width: '100%', 
				pre_placeh_opt: true,
				min_for_search : 2,
				enable_search: false,
				on_init: function(currentSelect) {
					var selectedOption = currentSelect.querySelector('option[selected]'),
						selectedIndex = [...currentSelect.querySelectorAll('option')].indexOf(selectedOption);
						flag = selectedOption.getAttribute('data-flag'),
						value = selectedOption.getAttribute('value'),
						spanKey = document.createElement('SPAN');
						spanKey.setAttribute('title', value);
						spanKey.innerHTML = flag,
						selectedValueString = document.querySelector('.lcslt-f-wallet-select[data-placeh]');
						
					// console.log(selectedIndex)
					selectedValueString.innerHTML = '';
					selectedValueString.append(spanKey);
					
				},
				on_ddAppended: function(selectItem) {
					var options = selectItem.querySelectorAll('option:not([data-lcslt-placeh])'), // все <option> нативного селекта
					dropdownElems = document.querySelectorAll('.wallet-select .lc-select-dd-scroll .lcslt-dd-opt'); // все <li> кастомного селекта

					// [...dropdownElems].forEach( function(element, index) {
					// 	element.classList.remove('lcslt-selected');
					// 	if(index == selectedIndex){
					// 		element.classList.add('lcslt-selected');
					// 	}
					// });
					
					// Добавление дополнительного элем-та. в каждый <li> кастомного селекта 
					for(var i=0; i<options.length;i++){
						var currVal = options[i];
						
						//формируем целый блок кастомного контента каждого <li> кастомного селекта
						// и добавляем его в <li>
						// Важно! Допускаются только <span>
						dropdownElems[i].innerHTML=`
								<span class="flag"><img src="img/flags/${currVal.getAttribute('value')}.png" alt="flag"/></span>
								<i class="wallet-target icon-${currVal.getAttribute('value')}"></i>
								<span class="select-status"></span>`;
					}
				},
				on_change: function(new_value, target_field) {
					// Добавление к результату выбора еще одного кастомного поля
					var searchedString = document.querySelector('.wallet-select [data-placeh]'),// берем строку с результатом выбора 
						addedValue = document.createElement('SPAN');//создаем новый эл-т., в кот-рый. будем помещать текст кастомного поля
						addedValue.innerHTML = target_field.querySelector(`[value="${new_value}"]`).getAttribute('data-flag');//получаем значение нужного кастомного поля из data-атрибутов нативного <option>

					console.log(addedValue.innerHtml)
					searchedString.append(addedValue);//добавляем строке с результатом выбора <span> со текстом нужного кастомного поля 

	 			},
				addit_classes : ['wallet-select']
			});
		}
	});
})();