<template>
	<view>
		<!-- 不在主要页面的弹出组件：错误警告框、输入计时器名称的模态框 -->
		<u-toast ref="warningToast" class="warningToast" />
		<u-modal v-model="isShowSaveModal" :show-title="false" :show-cancel-button="true" @confirm="saveTimerGroup">
			<input type="text" placeholder="请输入计时器名称" class="inputTitle" placeholder-class="placeholder" v-model="groupTitle">
		</u-modal>
		
		<!-- 循环计时器组件主体 -->
		<view class="loopTimer">
			
			<!-- 循环计时器组为空的提示 -->
			<view v-if="tempLoopTimerGroup.timerList.length == 0" class="noListTip">
				<text>循环计时器组为空，请按</text>
				<navigator url="../../pages/mobile/addTimerItem">
					<view class="button timerButton">
						<u-icon name="plus" size="27" color="white"></u-icon>
					</view>
				</navigator>				
				<text >添加第一个计时器</text>
			</view>

			<!-- 计时器列表 -->
			<scroll-view scroll-y="true" class="timerList">				
				<view class="loopTimerBox" v-for="(item,index) in tempLoopTimerGroup.timerList" :key="index" @click="gotoEditPage(index)">
					<view class="loopTimerTitle">
						{{item.title}}
					</view>
					<view class="loopTimerTime">
						{{item.showtime}}
					</view>
				</view>
			</scroll-view>
			
			<!-- 循环次数 -->
			<view class="count">
				<text>循环次数</text>
				<u-number-box v-model="tempLoopTimerGroup.count" :min="1" @change="countChange"></u-number-box>
			</view>

			<!-- 计时器列表按钮组 -->
			<view class="buttonGroup">
				<view class="button timerButton" @click="showSaveModal">
					<u-icon name="download" size="50" color="white"></u-icon>
				</view>
				<navigator url="../../pages/mobile/addTimerItem">
					<view class="button timerButton">
						<u-icon name="plus" size="50" color="white"></u-icon>
					</view>
				</navigator>
				
			</view>

			<!-- 底部按钮组 -->
			<view class="bottomButtonGruop">
				<navigator url="../../pages/mobile/loopTimerGroupList">
					<view class="button">
						<u-icon name="list-dot" size="50"></u-icon>
					</view>
				</navigator>

				<view class="button" @click="startLoopTimer">
					<u-icon name="play-right-fill" size="50"></u-icon>
				</view>

				<navigator url="../../pages/mobile/setting">
					<view class="button">
						<u-icon name="volume-up-fill" size="50"></u-icon>
					</view>
				</navigator>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 临时循环计时器组
				tempLoopTimerGroup: {},
				// 是否显示保存计时器组模态框的开关变量
				isShowSaveModal: false,
				// 计时器组标题
				groupTitle: '',
				// 循环次数
				count:1
			};
		},
		methods: {
			
			// 显示保存计时器组模态框
			showSaveModal(){
				// 如果计时器组为空则弹出错误提示并返回
				if(this.tempLoopTimerGroup.timerList.length == 0){
					
					this.$refs.warningToast.show({
						title:'计时器组至少需要一个计时器',
						type:'error',
						position:'top',
						icon:false
					})
					
					return
				}
				
				// 如果检查没有错误则弹出保存模态框
				this.isShowSaveModal = true
			},
			// 前往编辑计时器页面,并且把当前要编辑项目的索引号保存到全局变量中
			gotoEditPage(index) {
				getApp().globalData.currentEditTimerItem = index
				uni.navigateTo({
					url: '../../pages/mobile/editTimerItem'
				})
			},
			// 保存计时器组
			saveTimerGroup() {
				// 如果计时器组标题为空,弹出错误警告
				if(this.groupTitle.trim() == ''){
					
					this.$refs.warningToast.show({
						title:'请输入计时器组的标题',
						type:'error',
						position:'top'
					})
				}else{
					// 获取当前循环计时器组列表
					let loopTimerGroupList = uni.getStorageSync('loopTimerGroupList')
					
					// 把当前临时循环计时器组添加到循环计时器组列表
					loopTimerGroupList.push({
						title: this.groupTitle,
						timerGroup: this.tempLoopTimerGroup.timerList,
						count:this.tempLoopTimerGroup.count
					})
					
					// 把新的循环计时器组列表保存到本地存储
					uni.setStorage({
						key: 'loopTimerGroupList',
						data: loopTimerGroupList
					})
					
					// 把循环计时器组标题变量重新设置为空
					this.groupTitle = ''
				}
			},
			// 开始循环计时器,跳转到循环计时器页面
			startLoopTimer(){
				// 如果循环计时器组为空就弹出警告
				if(this.tempLoopTimerGroup.timerList.length == 0){
					
					this.$refs.warningToast.show({
						title:'计时器组至少需要一个计时器',
						type:'error',
						position:'top',
						icon:false
					})
				}
				
				// 跳转到循环计时器页面
				uni.navigateTo({
					url:'../../pages/mobile/loopCountDown'
				})
			},
			// 当循环次数变更时触发的函数
			countChange(e){
				// 把当前值更新到循环计时器组的循环次数
				this.tempLoopTimerGroup.count = e.value
				// 把新的数值保存到本地存储里
				uni.setStorage({
					key:'tempLoopTimerGroup',
					data:this.tempLoopTimerGroup
				})
			}
		},
		// 加载组件的时候从本地存储中读取并更新临时计时器组
		activated() {
			this.tempLoopTimerGroup = uni.getStorageSync('tempLoopTimerGroup')
			
		},
		created() {
			this.tempLoopTimerGroup = uni.getStorageSync('tempLoopTimerGroup')
		}
	}
</script>

<style lang="less" scoped>

	.warningToast{
		font-size: 40rpx;
		width: 400rpx;
	}

	.loopTimer {
		height: 100%;
		padding-top: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 750rpx;
		
		.noListTip{
			border: dashed gray;
			width: 75%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex-wrap:wrap;
			font-size: 32rpx;
			padding: 30rpx 0;
			
			.button{
				width:45rpx;
				height: 45rpx;
				box-shadow: none;
				margin: 20rpx 0;
			}
		}
		
		.timerList {
			height: 50%;
			
			.loopTimerBox {						
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 650rpx;
				height: 100rpx;
				margin: 0 50rpx 40rpx 50rpx;
				box-shadow: 0 7rpx 10rpx rgba(0, 0, 0, 0.19);
				font-size: 40rpx;
				padding: 0 50rpx;
				box-sizing: border-box;
			}
		}
		
		.count{
			font-size: 35rpx;
			font-weight: bold;
			display: flex;
			justify-content: space-around;
			width: 100%;
			margin-top: 30rpx;
		}
		
		.buttonGroup {
			display: flex;
			width: 75%;
			justify-content: space-around;
			margin-top: 60rpx;
			
			.button{
				box-shadow: none;
				
				.saveIcon {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
		
		.bottomButtonGruop {
			width: 750rpx;
			bottom: 10%;
			position: absolute;
			display: flex;
			justify-content: space-around;
		}
	}

	.button {
		border: 1px solid #F1F1F1;
		width: 90rpx;
		height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		color: rgb(34, 131, 246);
		box-shadow: 0 7rpx 10rpx rgba(0, 0, 0, 0.19);
	}
	
	.timerButton {
		background-color: rgb(34, 131, 246);
	}

	.inputTitle {
		margin: 45rpx auto;
		font-size: 40rpx;
		border-bottom: 4rpx solid black;
		text-align: center;
		width: 60%;

		.placeholder {
			text-align: center;
		}

	}
</style>
